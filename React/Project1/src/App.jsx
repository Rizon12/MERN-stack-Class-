import './App.css'

function App() {
  return (
    <>
    <header className='header'>
      <h2>Art Studio</h2>
      <nav>
        <a href="#">Home</a>
        <a href="#">About me</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </nav>
    </header>
    <section className='hero'>
      <div className='hero-text'>
        <h1>WELCOME TO MY WORLD, <br />WHERE I CREATE <br />BEAUTIFUL THINGS</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus accusamus quo commodi voluptate <br /> molestias molestiae nobis, quas officiis dolorum rerum alias quod eius! Earum ipsum eaque repudiandae sit nobis odit?</p>
        <button>Find Out More</button>
      </div>
      <img class='image1' src="/react2.jpg" alt="A girl image" />
    </section>

    <section className='about'>
      <img class='image2'src="/React.jpg" alt="Another girl image" />
      <div className='about-text'>
        <h2>About Me</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga sequi non accusantium! Similique alias facere dolore expedita minus facilis officiis eius impedit cupiditate labore. Debitis alias molestiae voluptas voluptatem sapiente!</p>
      </div>
    </section>
    </>
  )
}

export default App
