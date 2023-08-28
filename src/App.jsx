import './App.css'
import Card from './Components/Card/Card'
import Input from './Components/Input/Input'
import CardsList from './Components/Card/CardsList'
import { useState } from 'react'



function App() {

  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [description, setDescription] = useState("");

  const [cardsList, setCardsList] = useState([]);


  const [isValidImg, setIsValidImg] = useState(true);
  const [isValidTitle, setValidtitle] = useState(true);
  const [isValidDescription, setIsValidDescription] = useState(true);


  const handleChangeTitle = (event) => {
    const title = event.target.value;
    setTitle(title)
    if (title.trim().length <= 3) {
      setValidtitle(false)
    } else {
      setValidtitle(true)
    }
  }


  const handleChangeDescription = (event) => {
    const title = event.target.value;
    setDescription(title)
    if (title.trim().length <= 6) {
      setIsValidDescription(false)
    } else {
      setIsValidDescription(true)
    }
  }

  const handleChangeImgUrl = (event) => {
    const imageUrl = event.target.value
    setImgUrl(imageUrl)

    const imageUrlRegex = /.(jpeg|jpg|gif|png|bmp|svg)\w{6,}$/i;

    if (imageUrlRegex.test(imageUrl) <= 5) {
      setIsValidImg(true);
    } else {
      setIsValidImg(false);

    }
  }

  const handleButtonClick = (event) => {
    event.preventDefault();
    if (isValidTitle && isValidImg && isValidDescription) {
      setCardsList([
        ...cardsList,
        {
          title: title,
          description: description,
          imgUrl: imgUrl,
        },
      ]);
      setTitle("");
      setImgUrl("");
      setDescription("");
    }
  };

  return (
    <>
      <div className='header'>
        <h1 className='title'>My Library </h1>
      </div>



      <div className="container">

        <div className="formBook">
          <h2>Cadastrar Livros</h2>
          <form>
            <Input
              title="Título do Livro"
              type="text"
              value={title}
              fnOnChange={handleChangeTitle}
            />

            {!isValidTitle && (
              <p style={{ color: 'red' }}>Por favor, insira um título válido.</p>
            )}
            <Input
              title="Img URL"
              type="url"
              value={imgUrl}
              fnOnChange={handleChangeImgUrl}
            />
            {!isValidImg && (
              <p style={{ color: 'red' }}>Por favor, insira um link de imagem válido.</p>
            )}
            <Input
              title="Review"
              type="text"
              value={description}
              fnOnChange={handleChangeDescription}
              className='reviewBook'
            />
            {!isValidDescription && (
              <p style={{ color: 'red' }}>Por favor, insira um título válido.</p>
            )}
            <button onClick={handleButtonClick}
              disabled={title === '' && imgUrl === '' && description === ''}
            > Salvar</button>
          </form>
        </div>

        <div className="listCards">
          <Card
            title='Meu Livro'
            imgUrl='https://i0.wp.com/animagos.com.br/wp-content/uploads/2019/08/book2HPCCJourneyCover.png?w=919&ssl=1'
            description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, nam pariatur! Eius ducimus earum eaque velit nobis, consectetur eum asperiores voluptatum aliquid! Voluptates placeat est veniam similique amet itaque quia.'
          />

          <CardsList>
            {
              cardsList.map(
                infoCard => {
                  return (
                    <Card
                      key={infoCard.title}
                      title={infoCard.title}
                      imgUrl={infoCard.imgUrl}
                      description={infoCard.description}
                    />
                  )
                }
              )
            }
          </CardsList>
        </div>


      </div>

    </>
  )
}

export default App 
