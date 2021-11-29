import ForceGraph3D from 'react-force-graph-3d';
const myData ={
  
    "nodes": [
      
        {"id": "skills", "group": 2},
        {"id": "hakan can gunerli", "group": 3}, 
        {"id": "human-computer interaction", "group": 2},
        {"id": "robotics", "group": 2},
        {"id": "random software development", "group": 2},
        {"id": "education", "group": 3},
        {"id": "georgia institute of technology: (2021-2023)", "group":3},
        {"id": "university of georgia (2020-2021)", "group":3},
        {"id": "georgia state university (2019-2020)", "group":3}

      ],
      "links": [
        {"source": "hakan can gunerli", "target": "skills", "value": 1},
        {"source": "skills", "target": "human-computer interaction", "value": 1},
        {"source": "skills", "target": "robotics", "value": 1},
        {"source": "skills", "target": "random software development", "value": 1},
        {"source": "hakan can gunerli", "target": "education", "value": 1},
        {"source": "education", "target": "georgia institute of technology: (2021-2023)", "value": 1},
        {"source": "education", "target": "university of georgia (2020-2021)", "value": 1},
        {"source": "education", "target": "georgia state university (2019-2020)", "value": 1}
      ]
  };

function App() {
  return (
   <>
   <ForceGraph3D
  graphData={myData}
/>
   </>
  );
}

export default App;
