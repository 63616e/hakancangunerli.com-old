import "./styles.css";
import { Transformer } from "markmap-lib";
import * as markmap from "markmap-view";
import { useEffect, useRef } from "react";
const { Markmap, loadCSS, loadJS } = markmap;
document.title = "Hakan Can Personal Website";

const transformer = new Transformer();

const markdown = `

# hakan can gunerli
## Skills/Interests 
### Human-Computer Interaction
### Robotics
### Random Software Development stuff ツ

## Work Experience  <!-- fold -->
### Peero <!-- fold -->
- (January to August 2021)
  Head of Product
### theCoderSchool <!-- fold -->
- (2019-2021)
  Course Instructor
### Turkiye Is Bankasi  <!-- fold -->
- (September to October 2020)
  SWE Internship
## Research Experience <!-- fold -->
### Quinn Research Group (UGA)
### Heterogeneous Robotics Lab (UGA)
### College of Engineering (UGA)

## Education 
### <span style="color:#B3A369">Georgia Institute of Technology </span>  
- (2021-...)
  Emphasis in People and Devices

### <span style="color:#BA0C2F">University of Georgia </span> 
- (2021)
  Emphasis in Artificial Intelligence and Data Science
### <span style="color:#0039A6">Georgia State University </span> 
- (2019-2021)
  Emphasis in Data Science
## Contact <!-- fold -->
### [Github](github.com/hakancangunerli)
### [LinkedIn](linkedin.com/in/hakancangunerli)
### [Email](hakancangunerli@engineer.com)
## Resume 
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

      <svg
        ref={ref}
        style={{
          background: "rgb(32,33,36)",
          color: "rgb(240,248,255)",
          width: "100%",
          height: "100%",
          display: "block",
          alignSelf: "flex-start",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          overflow: "scroll",
          overflowX: "hidden",
          overflowY: "scroll",
          padding: "10px",
          borderRadius: "10px",
        }}
      ></svg>
    
  );
};
export default function App() {
  
  const M = useM(markdown);
  return(
  <>
  <div>{M}</div></>
    );

}
