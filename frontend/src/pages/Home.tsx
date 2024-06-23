import styled from '@emotion/styled'

const HomeLayout = styled.main`
   display: grid;
   grid-template-columns: 2fr minmax(300px, 1fr);
   grid-template-rows: min-content 1fr min-content;
   gap: 1rem;
   padding: 1rem;
   #intro {
      grid-column-start: 1;
      grid-column-end: 3;
   }
   #tracks {
      grid-column-start: 1;
      grid-column-end: 2;
   }
   #current {
      grid-column-start: 2;
      grid-column-end: 3;
      overflow: hidden;
      #image_container {
         width: 100%;

         #image {
            width: 100%;
            height: 100%;
            object-fit: cover;
         }
      }
   }
   #playing {
      grid-column-start: 1;
      grid-column-end: 3;
   }
`

const Playing = styled.section`
   /* border: 1px solid #ff0040; */
   border-radius: 50px;
   padding: 1rem 2rem;
   box-shadow: 0 0 10px 0 #44444422;
   display: flex;
   justify-content: right;
   align-items: center;
`

function Home() {
   return (
      <HomeLayout>
         <section id='intro'>
            <h1>Hello, John</h1>
         </section>
         <section id='tracks'>
            <h2>Sugegested Musics</h2>
            <ul>
               <li>Music 1</li>
               <li>Music 2</li>
               <li>Music 3</li>
            </ul>
         </section>
         <section id='current'>
            <div>
               <div id='image_container'>
                  <img
                     id='image'
                     src='https://www.shyamh.com/images/blog/music.jpg'
                     alt='music cover'
                  />
               </div>
               <div>
                  <h3>Music 1</h3>
                  <h5>Artist name</h5>
                  <h5>Author</h5>
               </div>
            </div>
         </section>
         <Playing id='playing'>
            <p style={{ marginRight: 'auto' }}>Track 123 somthing..</p>
            <div id='controls'>
               <button>Prev</button>
               <button>Play</button>
               <button>Next</button>
            </div>
         </Playing>
      </HomeLayout>
   )
}
export default Home
