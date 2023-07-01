import React from 'react'
import htmlLOGO from '../Logos/HTML-LOGO.svg'
import jsLOGO from '../Logos/jsLOGO.svg'
import reactLOGO from '../Logos/reactLOGO.svg'
import rubyLOGO from '../Logos/rubyLOGO.svg'
import cssLOGO from '../Logos/cssLOGO.svg'

const Frontend = () => {
  return (
    <div>
    <h3>Front End</h3>
    <img src={htmlLOGO} alt='html logo'></img>
    <p>HTML</p>
    <img src={jsLOGO} alt='js logo'></img>
    <p>JavaScript</p>
    <img src={cssLOGO} alt='css logo'></img>
    <p>CSS</p>
    <img src={reactLOGO} alt='react logo'></img>
    <p>React</p>
    <img src={rubyLOGO} alt='ruby logo'></img>
    <p>Ruby</p>
    </div>
  )
}

export default Frontend