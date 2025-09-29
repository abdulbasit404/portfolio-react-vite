import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CarImage from "../assets/images/car-image.png";
import CarImageTwo from "../assets/images/car-image-two.webp";
import CarImageThree from "../assets/images/car-image-three.webp";

function Cards() {
  const [visibleCards, setVisibleCards] = useState(4); // 👈 Initially show 8

  const cardData = [
    { title: "Audi R8", imgSrc: CarImage, description: "This is Audi R8" },
    {
      title: "Audi RX Power",
      imgSrc: CarImageTwo,
      description: "This is RX Power",
    },
    {
      title: "Audi RX 100",
      imgSrc: CarImageThree,
      description: "This is Audi RX 100",
    },
    {
      title: "Audi RZ 500",
      imgSrc: CarImage,
      description: "This is Audi RZ 500",
    },
    {
      title: "Audi RZ 500",
      imgSrc: CarImageTwo,
      description: "This is Audi RZ 500",
    },
    {
      title: "Audi RZ 500",
      imgSrc: CarImageThree,
      description: "This is Audi RZ 500",
    },
    {
      title: "Audi RZ 1000",
      imgSrc: CarImage,
      description: "This is Audi RZ 1000",
    },
    {
      title: "Audi RZ 1001",
      imgSrc: CarImageTwo,
      description: "This is Audi RZ 1001",
    },
  ];

  const showMoreCards = () => {
    setVisibleCards(cardData.length); // 👈 Show all cards
  };

  return (
    <div className="p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cardData.slice(0, visibleCards).map((item, index) => (
          <Card key={index} sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt={item.title}
              height="140"
              image={item.imgSrc}
              sx={{
                height: 200,
                width: "100%",
                objectFit: "contain",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {item.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </div>

      {/* Show More Button */}
      {visibleCards < cardData.length ? (
        <div className="flex justify-center mt-6">
          <button
            onClick={showMoreCards}
            className="bg-amber-700 cursor-pointer text-white px-6 py-2 rounded transition"
          >
            Show More
          </button>
        </div>
      ) : (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setVisibleCards(4)}
            className="bg-amber-700 cursor-pointer text-white px-6 py-2 rounded transition"
          >
            Show Less
          </button>
        </div>
      )}
    </div>
  );
}

export default Cards;
