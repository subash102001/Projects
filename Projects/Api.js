const userNames = ['subash', 'cody', 'bucky']
function Api() {

  const renderListOfUserNames = (names) => {
    return names.map(name => <li>{name}</li>)
  }

  return (
    <div>
      <ul>
        {renderListOfUserNames(userNames)}
      </ul>
    </div>
  );
}

export default Api;