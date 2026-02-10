
const Hw = () => {
  const name = "Ivan";

  const favoriteSite = {
    siteName: "Lms",
    url: "https://edu.goiteens.com/homepage",
  };

  const colors = ["Червоний", "Синій", "Зелений"];

  return (
    <div className="card">
      <h1>{name}</h1>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQWp_9I_yP7D5fMedoAE8MZF2zEi-U-6oJg&s"
        alt="У всі тяжкі"
      />
<p className="welcome-text">Ласкаво просимо до нашого сайту!</p>

      <p>
        <a href={favoriteSite.url} target="_blank" rel="noreferrer">
          {favoriteSite.siteName}
        </a>
      </p>

      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
};

export default Hw;
