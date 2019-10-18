const rawData = {
  1969: "./dist/data/atp_matches_1969.csv",
  1974: "./dist/data/atp_matches_1974.csv",
  1984: "./dist/data/atp_matches_1984.csv",
  2006: "./dist/data/atp_matches_2006.csv",
  2011: "./dist/data/atp_matches_2011.csv",
  2018: "./dist/data/atp_matches_2018.csv",
}

let link, node;

function runStatRender(year) {
  // Remove previous data
  d3.select("#custom-circle > svg").remove();

  // SVG element params
  var diameter = 960,
    radius = diameter / 2,
    innerRadius = radius - 120;

  var cluster = d3.cluster()
    .size([360, innerRadius]);

  var line = d3.radialLine()
    .curve(d3.curveBundle.beta(0.85))
    .radius(function (d) {
      return d.y;
    })
    .angle(function (d) {
      return d.x / 180 * Math.PI;
    });

  var svg = d3.select('#custom-circle').append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
    .append("g")
    .attr("transform", "translate(" + radius + "," + radius + ")");

  link = svg.append("g").selectAll(".link");
  node = svg.append("g").selectAll(".node");

  // Import, parse, and render data
  // D3v5 syntax:
  // d3.csv("./data/2018_matches.csv").then(function (data, error) {
  // d3.csv(rawData[year]).then(function (data, error) {
  // D3v4 syntax:
  d3.csv(rawData[year], function (error, data) {
    if (error) throw error;
  
    // Create an object with players and their opponents
    let playersAndOpponents = {};
    data.forEach((datum) => {
      if (datum.loser_name !== 'undefined' || datum.winner_name !== 'undefined') {
        playersAndOpponents[datum.winner_name] = playersAndOpponents[datum.winner_name] || [];
        playersAndOpponents[datum.winner_name].push(datum.loser_name);
      }
    })
    // Parse the data
    let importData = [];
    for (let [key, value] of Object.entries(playersAndOpponents)) {
      let entryObj = { "name": `${key}`, "imports": `${value}` }
      entryObj.imports = entryObj.imports.split(',')
      importData.push(entryObj);
    }
  
    var root = packageHierarchy(importData)
  
    cluster(root);
  
    node = node
      .data(root.leaves())
      .enter().append("text")
      .attr("class", "node")
      .attr("dy", "0.31em")
      .attr("transform", function (d) {
        return "rotate(" + (d.x - 90) + ")translate(" + (d.y + 8) + ",0)" + (d.x < 180 ? "" : "rotate(180)");
      })
      .attr("text-anchor", function (d) {
        return d.x < 180 ? "start" : "end";
      })
      .text(function (d) {
        return d.data.key;
      })
      .on("mouseover", mouseovered)
      .on("mouseout", mouseouted);
  
    link = link
      .data(packageImports(root.leaves()))
      .enter().append("path")
      .each(function (d) {
        d.source = d[0], d.target = d[d.length - 1];
      })
      .attr("class", "link")
      .attr("d", line);
  })
}


  // Construct the package hierarchy from class names.
function packageHierarchy(classes) {
  var map = {};

  function find(name, data) {
    var node = map[name], i;
    if (!node) {
      node = map[name] = data || {name: name, children: []};
      
      if (name.length) {
        node.parent = find(name.substring(0, i = name.lastIndexOf(".")));
        node.parent.children.push(node);
        node.key = name.substring(i + 1);
      }
    }
    return node;
  }
  classes.forEach(function(d) {
    find(d.name, d);
  });
  return d3.hierarchy(map[""]);
}

// Return a list of imports for the given array of nodes.
function packageImports(nodes) {
  var map = {},
      connections = [];
      
  // Compute a map from name to node.
  nodes.forEach(function(d) {
    map[d.data.name] = d;
  });

  // Make an array of all player names
  const playerNames = nodes.map(node => node.data.name);

  // For each import, construct a link from the source to target node.
  nodes.forEach(function (d) {
    if (d.data.imports) d.data.imports.forEach(function (name) {
      
      if (!playerNames.includes(name)) return;
      connections.push(map[d.data.name].path(map[name]));
    });
  });
  
  return connections;
}