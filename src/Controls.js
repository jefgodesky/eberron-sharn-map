import LevelControl from './LevelControl'
import FocusedTower from './FocusedTower'
import ShowArea from './ShowArea'

function Controls (props) {
  return (
    <div className='controls'>
      <h2>Show Level</h2>
      <ul>
        <LevelControl code='lower' label='Lower City' curr={props.level} setLevel={props.setLevel} />
        <LevelControl code='middle' label='Middle City' curr={props.level} setLevel={props.setLevel} />
        <LevelControl code='upper' label='Upper City' curr={props.level} setLevel={props.setLevel} />
      </ul>
      <FocusedTower tower={props.focusedTower} />
      <ShowArea area={props.area} setArea={props.setArea} />
    </div>
  )
}

export default Controls
