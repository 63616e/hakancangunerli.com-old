import "./styles.css";
import { Transformer } from "markmap-lib";
import * as markmap from "markmap-view";
import { useEffect, useRef } from "react";
const { Markmap, loadCSS, loadJS } = markmap;
document.title = "Hakan Can Personal Website";
const splitHeights = [1, 2, 3];
const i = 2;
const sY = splitHeights.slice(0, i).reduce((p, c) => p + c, 0);
// console.log(sY);

const transformer = new Transformer();

const markdown = `
# heyo i'm hakan can gunerli! 
## Work Experience <!-- fold -->
### Peero 
### theCoderSchool
### Turkiye Is Bankasi (Intern)

## Research Experience <!-- fold -->
### Quinn Research Group (UGA)
### Heterogeneous Robotics Lab (UGA)
### College of Engineering (UGA)

## Education <!-- fold -->
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
          width: "1280",
          height: "700",
          display: "block",
          alignSelf: "flex-start",
          margin: "auto",
        }}
      ></svg>{" "}
    </center>
  );
};
export default function App() {
  const M = useM(markdown);
  return <div>{M}</div>;
}
