import {useState} from "react";

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
        <li>
          <input
            id='level-lower'
            type='radio'
            name='level'
            onChange={() => props.setLevel('lower')}
            defaultChecked={props.level === 'lower'} />
          <label htmlFor='level-lower'>Lower Wards</label>
        </li>
        <li>
          <input
            id='level-middle'
            type='radio'
            name='level'
            onChange={() => props.setLevel('middle')}
            defaultChecked={props.level === 'middle'} />
          <label htmlFor='level-middle'>Middle Wards</label>
        </li>
        <li>
          <input
            id='level-upper'
            type='radio'
            name='level'
            onChange={() => props.setLevel('upper')}
            defaultChecked={props.level === 'upper'} />
          <label htmlFor='level-upper'>Upper Wards</label>
        </li>
      </ul>
      {renderFocusedTowerName(props.focusedTower)}
    </div>
  )
}

export default Controls
