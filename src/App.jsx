import './App.css'
import Card from './Components/Card/Card'
import Input from './Components/Input/Input'
import CardsList from './Components/Card/CardsList'
import { useState } from 'react'
// import Swal from 'sweetalert2';


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

    const imageUrlPattern = /.(jpeg|jpg|gif|png|bmp|svg)\w{6,}$/i;

    if (imageUrlPattern.test(imageUrl) <= 5) {
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
      <h1> Checkpoint 1 - Frontend III</h1>
      <form>
        <Input
          title="Título do filme"
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
          title="Sinopse"
          type="text"
          value={description}
          fnOnChange={handleChangeDescription}
        />
        {!isValidDescription && (
          <p style={{ color: 'red' }}>Por favor, insira um título válido.</p>
        )}



        <br />
        <button onClick={handleButtonClick}
          disabled={title === '' && imgUrl === '' && description === ''}
        > Salvar</button>
      </form>

      <CardsList>
        {
          cardsList.map(
            infoCard => {
              return (
                <Card
                  key={infoCard.title}
                  title={infoCard.title.toUpperCase()}
                  imgUrl={infoCard.imgUrl}
                  description={infoCard.description}
                />
              )
            }
          )
        }
      </CardsList>

    </>
  )
}

export default App 
