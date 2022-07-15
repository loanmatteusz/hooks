const { useState, useEffect } = require("react");

const HookUseEffect = () => {
  const [ resourceType, setResourceType ] = useState('posts');
  const [ resource, setResource ] = useState([]);

  function changeResourceType(resourceType) {
    setResourceType(resourceType);
  }

  useEffect(() => {
    changeResourceType(resourceType);
    const fatchResourceType = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`);
      const responseJSON = await response.json();
      setResource([...responseJSON]);
    }
    fatchResourceType();
  }, [resourceType]);

  return (
    <div style={{
      margin: '10px auto',
      border: 'solid 2px orange',
      borderRadius: '10px',
      width: '300px',
      height: '200px'
    }}>
      <h1>{ resourceType }</h1>
      <button onClick={() => changeResourceType('posts')}>Posts</button>
      <button onClick={() => changeResourceType('comments')}>comments</button>
      <button onClick={() => changeResourceType('todos')}>Todos</button>
      {
        resource.map(item => {
          return (
            <>
              <ul key={item.id}>
                {item.id} - {item.title || item.body}
              </ul>
            </>
          );
        })
      }
    </div>
  );
}

export { HookUseEffect }
