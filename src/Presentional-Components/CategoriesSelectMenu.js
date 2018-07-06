import React, { Fragment } from "react"

const categories = ["all", "sightseeing", "discovering", "traveling", "hiking", "shopping", "going_out", "eating", "doing_sports"]
const category = categories.map(category => <option value={category} key={category}>{category.toUpperCase()}</option>)

const CategoriesSelectMenu = (props) => (

  <Fragment>
    <select name="select" onChange={props.handleChange} className="ui fluid normal dropdown">
      {category}
    </select>
  </Fragment>

)


export default CategoriesSelectMenu
