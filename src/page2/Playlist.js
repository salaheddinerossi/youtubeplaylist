import Button from '../general/Button';
import image from '../images/image3.jpg'
import Search from './Search';

function Playlist () {
    return (
        <div className="container mx-auto ">
            <Search />
            <div className="bg-gray-100 p-3 my-8 flex ">
                <img className='image' src={image} />
                <div className="my-auto ml-5">
                    <h1 className="font-bold text-xl">Example title</h1>
                    <p className="mt-3">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages</p>
                    <div className="flex ">
                        <p className="font-bold mt-4 mr-5">10 videos</p>
                        <Button content="read more"/>

                    </div>
                </div>

            </div>
        </div>
    )
}
export default Playlist; 