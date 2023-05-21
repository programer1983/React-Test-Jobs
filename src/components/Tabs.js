import React from 'react'

const Tabs = () => {
  const [toggleTabs, seToggleTabs] = React.useState(1)

  function toggleTab(index){
    seToggleTabs(index)
  }


  return (
    <div className='container'>
        <div className='block__tabs'>
            <button onClick={() => toggleTab(1)} className={toggleTabs === 1 ? "tabs active-tabs" : "tabs"} >
                Tabs 1
            </button>
            <button onClick={() => toggleTab(2)} className={toggleTabs === 2 ? "tabs active-tabs" : "tabs"} >
                Tabs 2
            </button>
            <button onClick={() => toggleTab(3)} className={toggleTabs === 3 ? "tabs active-tabs" : "tabs"} >
                Tabs 3
            </button>
        </div>
        <div className='content__tabs'>
            <div className={toggleTabs === 1 ? "content active__content" : "content"}>
                <h2>Content 1</h2>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget metus et ex imperdiet accumsan consequat et ante. Duis feugiat tincidunt gravida. Etiam sit amet quam accumsan, consectetur tortor in, lacinia eros.</p>
            </div>
            <div className={toggleTabs === 2 ? "content active__content" : "content"}>
                <h2>Content 2</h2>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget metus et ex imperdiet accumsan consequat et ante. Duis feugiat tincidunt gravida. Etiam sit amet quam accumsan, consectetur tortor in, lacinia eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget metus et ex imperdiet accumsan consequat et ante. Duis feugiat tincidunt gravida. Etiam sit amet quam accumsan, consectetur tortor in, lacinia eros.</p>
            </div>
            <div className={toggleTabs === 3 ? "content active__content" : "content"}>
                <h2>Content 3</h2>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget metus et ex imperdiet accumsan consequat et ante. Duis feugiat tincidunt gravida. Etiam sit amet quam accumsan, consectetur tortor in, lacinia eros.</p>
            </div>
        </div>
    </div>
  )
}

export default Tabs      