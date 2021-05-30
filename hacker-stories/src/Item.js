const Item = ({ item, onRemoveItem }) => {

  return (
    <div className="item">
      <span><a href={item.url}>{item.title}</a></span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
      <span>
        <button
          type="button"
          className="button button_small"
          onClick={() => onRemoveItem(item)}>
          Dismiss
        </button>
      </span>
    </div>
  )
}

export default Item