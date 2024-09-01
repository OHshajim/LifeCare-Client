const Team = () => {
  const team = [
    {
      name: "Ahmed Omer",
      post: "CEO",
      url: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=100",
    },
    {
      name: "Jane Deo",
      post: "Co-founder",
      url: "https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=100",
    },
    {
      name: "Allen Burger",
      post: "Manager",
      url: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=100",
    },
    {
      name: "Ladis Wasrom",
      post: "Assistant",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=100",
    },
  ];
  console.log(team);

  return (
    <section className="max-w-[1650px] mx-auto px-2 sm:px-4 lg:px-10">
      <div className="grid gap-8 mt-8 sm:grid-cols-2 xl:grid-cols-4 ">
        {team.map((member) => (
          <div key={member.post} className="flex items-center justify-center">
            <div className="w-full max-w-xs text-center transform transition duration-500 hover:scale-105 hover:shadow-xl animate-fade-in">
              <img
                className="object-cover object-center w-full h-52 mx-auto rounded-lg"
                src={member.url}
                alt={member.name}
              />

              <div className="mt-2 pb-2">
                <h3 className="text-lg text-black font-semibold">
                  {member.name}
                </h3>
                <span className="mt-1 font-medium text-gray-700">
                  {member.post}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
