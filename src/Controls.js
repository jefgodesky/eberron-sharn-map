import LevelControl from './LevelControl'

function renderFocusedTowerName (name) {
  if (!name) return null
  const slug = name.replaceAll("'", '%27').replaceAll(' ', '_')
  const url = `https://dragonbetween.net/wiki/${slug}`
  return (
    <div>
      <p><strong>Highlighted:</strong> <a href={url} target='_blank' rel='noreferrer'>{name}</a></p>
    </div>
  )
}

function Controls (props) {
  return (
    <div className='controls'>
      <h2>Show Level</h2>
      <ul>
        <LevelControl code='lower' label='Lower City' curr={props.level} setLevel={props.setLevel} />
        <LevelControl code='middle' label='Middle City' curr={props.level} setLevel={props.setLevel} />
        <LevelControl code='upper' label='Upper City' curr={props.level} setLevel={props.setLevel} />
      </ul>
      {renderFocusedTowerName(props.focusedTower)}
    </div>
  )
}

export default Controls
