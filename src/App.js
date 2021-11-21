import "./styles.css";
import { Transformer } from "markmap-lib";
import * as markmap from "markmap-view";
import { useEffect, useRef } from "react";
const { Markmap, loadCSS, loadJS } = markmap;
document.title = "Hakan Can Personal Website";



const transformer = new Transformer();

const markdown = `
# heyo i'm hakan can gunerli! 
## Work Experience 
### Peero 
### theCoderSchool
### Turkiye Is Bankasi (Intern)

## Research Experience 
### Quinn Research Group (UGA)
### Heterogeneous Robotics Lab (UGA)
### College of Engineering (UGA)

## Education 
### Georgia Institute of Technology
### University of Georgia
### Georgia State University
## Skills/Interests <!-- fold -->
### Human-Computer Interaction
### Robotics
### Random Software Development stuff ツ
## Contact <!-- fold -->
### [Github](github.com/hakancangunerli)
### [LinkedIn](linkedin.com/in/hakancangunerli)
### [Email](hakancangunerli@engineer.com)
## Resume <!-- fold -->
### [Right here.](https://drive.google.com/drive/folders/1oGVqzsSogTQFBSXsNNQk5X5MIUXGjVvI?usp=sharing)
`;
// 1. transform markdown

const useM = (md, option) => {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.innerHTML = "";
    const { root, features } = transformer.transform(md);
    const { styles, scripts } = transformer.getUsedAssets(features);
    if (styles) loadCSS(styles);
    if (scripts) loadJS(scripts, { getMarkmap: () => markmap });
    Markmap.create(ref.current, option, root);
  }, [md, option]);
  return (
    <center>
      {" "}
      <svg
        ref={ref}
        style={{
          background: 'rgb(32,33,36)',
          color:'rgb(240,248,255)',
          width: "100%",
          height: "100%",
          display: "block",
          alignSelf: "flex-start",
          margin: "auto",
          position:'fixed', 
          top:'0',
          left:'0'
        }}
      ></svg>{" "}
    </center>
  );
};
export default function App() {
  const M = useM(markdown);
  return <div>{M}</div>;
}
