import Image from "next/image";
import omelete from './omelete.jpeg'
export default function Home() {
  return (
   <div className="bg-white whitebox m-5 rounded-xl	p-7 space-y-8 shadow-lg">
<Image src={omelete} alt="image" className="rounded-xl"/>
<h1 className="font-serif font-medium	text-4xl">Simple Omelette Recipe</h1>
<p className="font-serif ">An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables or meat</p>
<div className="pink rounded-xl p-5">
  <h1 className=" font-serif font-semibold pinkt ">Preparation time</h1>

,<ul className="space-y-2 ml-4">
  <li className="justify-start gap-4  list-disc"> <b>Total: </b>Aprroximately 10 minutes</li>
  <li className="justify-start gap-4  list-disc"> <b>Preparation: </b>5 minutes</li>
  <li className="justify-start gap-4  list-disc"> <b>Cooking: </b>5 minutes</li>
</ul>
</div>
<h1 className="font-serif font-medium text-3xl text-orange-800	">Ingredients</h1>

<ul className="ml-4 space-y-2">
  <li className="list-disc">2-3 large eggs</li>
  <li className="list-disc">Salt, to taste</li>
  <li className="list-disc">Pepper, to taste</li>
  <li className="list-disc">1 tablespoon of butter or oil</li>
  <li className="list-disc">Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
</ul>

<h1 className="font-serif font-medium text-3xl text-orange-800	">Instructions</h1>

<ol className="ml-4 space-y-3">
<li className="list-decimal "><b>Beat the eggs: </b>In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk to make it fluffier texture.</li>
<li className="list-decimal"><b>Heat the pan: </b>Place a non-stick frying pan over medium heat and add butter or oil.</li>
<li className="list-decimal"><b>Cook the omelete: </b>Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface</li>
<li className="list-decimal"><b>Add fillings(optional): </b>When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette</li>
<li className="list-decimal"><b>Fold and serve: </b> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate</li>
<li className="list-decimal"><b>Enjoy: </b>Serve hot, with additional salt and pepper if needed</li>
</ol>

<h1 className="font-serif font-medium text-3xl text-orange-800	">Nutrition</h1>
<p className="text-lg">The table below shows nutritioal values per serving without the additinal fillings</p>

<div className=" flex text-lg border-b-2 pb-3"><span className="w-20 h-5"></span> <p>Calories</p> <span className="w-10 h-5"></span> <span className="w-20 h-5"></span> <b className="text-orange-800">277kcal</b></div>
<div className=" flex text-lg border-b-2 pb-3"><span className="w-20 h-5"></span> <p>Carbs </p> <span className="w-20 h-5"></span> <span className="w-20 h-5"></span><b className="text-orange-800"> 0g</b></div>
<div className=" flex text-lg border-b-2 pb-3"><span className="w-20 h-5"></span> <p>Protein </p> <span className="w-20 h-5"></span> <span className="w-20 h-5"></span><b className="text-orange-800"> 20g</b></div>
<div className=" flex text-lg pb-3"><span className="w-20 h-5"></span> <p>Fat </p> <span className="w-20 h-5"></span> <span className="w-20 h-5"></span> <b className="text-orange-800">22g</b></div>

   </div>
  );
}
