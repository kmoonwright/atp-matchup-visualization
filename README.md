# ATP Tour Matchup Visualization

## Architecture and Technologies
* D3.js for data visualization
* HTML/CSS/JavaScript on the frontend and Node.js on the backend
* Data files formatted from CSV

## Background and Overview
This project was built to highlight record-breaking tennis performances over the course of a single tournament season by individual players. Hover over a player's name to see their matchups, green lines represent match victories and purple lines represent match defeats. Use the search feature to find players by name, or highlight specific players.

This visualization represents all player matchups between male tennis players at the professional level, organized by year. The featured years highlight the dominance of Rod Laver in 1969, Jimmy Connors in 1974, John McEnroe in 1984, Roger Federer in 2006, and Novak Djokovic in 2011. The statistics for 2018 visualize the last complete set of data from a tournament season.

![ATP-Matchup-Screenshot][logo]

## Implementation
- Formulated a custom hierarchical edge bundling design using the D3 library to visualize win-loss ratios in a single tournament season, to highlight the sport’s record-breaking years.
- Authored algorithms for responsive search result highlighting triggered by changes to user input, to provide an intuitive and lively UX.
- Created a custom CSV file parser to aggregate statistics between nodes, compile relational data, and render the tree, allowing for usage of multiple datasets.

## Custom CSV Parser 
The parser extracts the selected data set from an memoized object to prepare a root node and begin to build relationships between data nodes.
```javascript
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
  
    // Prepare the root
    let root = packageHierarchy(importData)
    cluster(root);
    ...
   }
```

## Future Plans 
- A synopsis render of subsequent match statistics for the year when selecting a player.
- Compare the yearly results of multiple players with selectors/filters.
- In-depth analysis of a single player's results based on court surface specialty (hard, grass, clay).

[logo]: https://github.com/kmoonwright/ATP-Matchup-Visualization/blob/master/dist/assets/screenshot.png

