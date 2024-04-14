//@ts-ignore
import ReactCurvedText from 'react-curved-text';


const RingText = () => {
  return (
    <div>
        <ReactCurvedText
  width='300'
  height={300}
  cx='150'
  cy={150}
  rx='106'
  ry='106'
  startOffset='0'
  reversed={false}
  text='Download Resume * Download Resume * Download Resume * '
  textProps={{"style": {"fontSize": "24"}}}
  textPathProps={null}
  tspanProps={{"dy": "25"}}
  ellipseProps={null}
  svgProps={{"style": {"animation": "rotation 10s linear infinite"}}} 
/>
    </div>
  )
}

export default RingText