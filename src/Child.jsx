import React from 'react'

function PropProvider(name){
    return <h2>hello {name.name}</h2>
}

function Child() {
  return (
    <>
    <div>I am a child and I have a name</div>
    <div>
        <PropProvider name="kushal" />
        {/* Child({ name: name }); */}
    </div>
    </>
  )
}

export default Child