function LevelControl (props) {
  return (
    <li>
      <input
        id={`level-${props.code}`}
        type='radio'
        name='level'
        onChange={() => props.setLevel(props.code)}
        defaultChecked={props.curr === props.code} />
      <label htmlFor={`level-${props.code}`}>{props.label}</label>
    </li>
  )
}

export default LevelControl
