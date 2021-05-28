import LevelControl from './LevelControl'
import FocusedTower from './FocusedTower'

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
    </div>
  )
}

export default Controls
