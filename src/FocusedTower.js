function FocusedTower (props) {
  if (!props.tower) return null
  const slug = props.tower.replaceAll("'", '%27').replaceAll(' ', '_')
  const url = `https://dragonbetween.net/wiki/${slug}`
  return (
    <div>
      <h2>Show Tower</h2>
      <p><a href={url} target='_blank' rel='noreferrer'>{props.tower}</a></p>
    </div>
  )
}

export default FocusedTower
