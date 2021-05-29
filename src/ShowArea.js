import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import data from './districts.json'

function getAreas (data) {
  const { quarters, wards, districts } = data
  const areas = []
  quarters.forEach(quarter => {
    areas.push({ name: quarter })
    wards.filter(ward => ward.quarter === quarter).forEach(ward => {
      areas.push({ name: ward.name })
      districts.filter(district => district.ward === ward.name).forEach(district => areas.push({ name: district.name }))
    })
  })
  return areas
}

function ShowArea (props) {
  return (
    <div>
      <h2>Show Area</h2>
      <ReactSearchAutocomplete
        items={getAreas(data)}
        styling={{ zIndex: 2 }}
        showIcon={false}
        inputSearchString={props.area || ''}
        onSelect={item => props.setArea(item.name)}
        autofocus />
    </div>
  )
}

export default ShowArea