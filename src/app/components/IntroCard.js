const IntroCard = () => {
  return (
    <section id="about" class="py-20 px-4">
      <div class="container mx-auto max-w-5xl">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="md:w-2/3 mb-8 md:mb-0">
            <h1 class="text-5xl font-bold mb-10">Hi, I am Cyen</h1>
            <p class="text-lg mb-6">Welcome to my personal website</p>
            {/* <a
              href="#"
              class="inline-block px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition duration-300"
            >
              Download Resume
            </a> */}
          </div>
          <div class="md:w-1/3 relative">
            <div class="rounded-full overflow-hidden w-64 h-64 mx-auto relative z-10">
              <img
                src="path_to_your_image.jpg"
                alt="Geek"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="absolute top-0 right-0 -mr-8 mt-8">
              {/**
           * 
          <!-- Add your tech icons here -->
          <!-- Example: -->
          <!-- <img src="path_to_icon1.png" alt="Tech 1" class="w-8 h-8 mb-4"> -->
          <!-- <img src="path_to_icon2.png" alt="Tech 2" class="w-8 h-8 mb-4"> -->
          <!-- Add more icons as needed -->
           */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroCard;
