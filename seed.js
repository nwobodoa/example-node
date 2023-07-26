const mongoose = require("mongoose");
const Event = require("./models/EventModel");

const connectionString = `${process.env?.MONGO_CONN_STR}/eventsDB`;

async function seedData() {
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const eventsData = [
      {
        id: "1",
        title: "Summer Music Festival",
        category: "Music",
        country: "Canada",
        city: "Vancouver",
        date: "2023-07-15",
        time: "19:00",
        location: "BC Place Stadium",
        description: "Join us for a night of live music featuring top artists from around the world.",
        price: 30,
        rating: 2.5,
        image: "https://travelfreak.com/wp-content/uploads/2018/04/summer-music-festivals-1-770x513.jpg",
      },
      {
        id: "2",
        title: "Outdoor Concert Series",
        category: "Music",
        date: "2023-07-15",
        time: "18:30",
        city: "Vancouver",
        country: "Canada",
        location: "Stanley Park",
        description: "Enjoy an evening of music under the stars with local and international bands.",
        price: 25,
        rating: 4,
        image: "https://a.cdn-hotels.com/gdcs/production118/d485/f880a818-ebe6-4402-b56f-d8ee002a944c.jpg?impolicy=fcrop&w=800&h=533&q=medium",
      },
      {
        id: "3",
        title: "Music in the Park",
        category: "Music",
        date: "2023-07-16",
        time: "19:30",
        location: "Centennial Park",
        country: "Canada",
        city: "Toronto",
        description: "Experience a free outdoor music event with various genres and talented performers.",
        price: 0,
        rating: 4,
        image: "https://image.jimcdn.com/app/cms/image/transf/dimension=1190x10000:format=jpg/path/sa6549607c78f5c11/image/ia549b5935af7218d/version/1554203275/glastonbury-festival-best-summer-music-festivals.jpg",
      },
      {
        id: "4",
        title: "Art Exhibition",
        category: "Art",
        date: "2023-07-17",
        time: "11:00",
        city: "Montreal",
        country: "Canada",
        location: "Gallery of Modern Art",
        description: "Explore a captivating exhibition showcasing contemporary art from renowned artists.",
        price: 15,
        rating: 4,
        image: "https://images.squarespace-cdn.com/content/v1/56f194ec60b5e96a0b015712/1649860559693-7DPM2JHEZJZEGP59HH4F/DSC_7895.jpg?format=1000w",
      },
      {
        id: "5",
        title: "Food Festival",
        category: "Food & Drink",
        date: "2023-07-18",
        time: "12:00",
        country: "Canada",
        location: "Waterfront Park",
        city: "Halifax",
        description: "Indulge in a culinary feast with a wide variety of delicious foods from local vendors.",
        price: 10,
        rating: 3,
        image: "https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg",
      },
      // Add more events here as needed
    ];

    await Event.deleteMany({});
    await Event.insertMany(eventsData);

    console.log("Successfully created events in the database.");
  } catch (err) {
    console.error(err);
  }
}

module.exports = seedData
