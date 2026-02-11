function Hw() {


  const myName = "Ivan";

  // 2. Об'єкт з посиланням
  const favoriteSite = {
    name: "LMS",
    url: "https://edu.goiteens.com/courses"
  };

  // 3. Два числа та їх сума
  const number1 = 10;
  const number2 = 15;
  const sum = number1 + number2;

  // 4. Масив кольорів
  const colors = ["Червоний", "Синій", "Зелений"];

  return (
    <div>

      <h1>{myName}</h1>

      <p>Ласкаво просимо до нашого сайту!</p>

      <img
        src={"https://picsum.photos/300/200"}
        alt={"поле с морем "}
      />

      <p>
        Мій улюблений сайт:{" "}
        <a href={favoriteSite.url} target="_blank" rel="noreferrer">
          {favoriteSite.name}
        </a>
      </p>

      <p>
        Сума чисел {number1} і {number2} дорівнює {sum}
      </p>

      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>

    </div>
  );
}

export default Hw;
