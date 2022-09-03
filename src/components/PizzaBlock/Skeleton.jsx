import React from "react"
import ContentLoader from "react-content-loader"

export const Skeleton = (props) => (
  <ContentLoader 
    className='pizza-block'
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="134" cy="131" r="125" /> 
    <rect x="3" y="277" rx="10" ry="10" width="280" height="38" /> 
    <rect x="0" y="337" rx="10" ry="10" width="280" height="90" /> 
    <rect x="3" y="443" rx="0" ry="0" width="55" height="50" /> 
    <rect x="122" y="451" rx="25" ry="25" width="153" height="45" />
  </ContentLoader>
)