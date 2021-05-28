function FocusedTower (props) {
  if (!props.tower) return null
  const slug = props.tower.replaceAll("'", '%27').replaceAll(' ', '_')
  const url = `https://dragonbetween.net/wiki/${slug}`
  return (
    <div>
      <p><strong>Highlighted:</strong> <a href={url} target='_blank' rel='noreferrer'>{props.tower}</a></p>
    </div>
  )
}

export default FocusedTower
