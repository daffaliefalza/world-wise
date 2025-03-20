const CountryItem = ({ countryData }) => {
  return (
    <li>
      {countryData.emoji} {countryData.country}
    </li>
  );
};

export default CountryItem;
