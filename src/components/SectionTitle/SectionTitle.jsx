const SectionTitle = ({ title, subTitle, text, color }) => {
  return (
    <div className="flex items-center justify-center text-center">
      <div>
        {subTitle && (
          <h2 className={`text-red-500 lg:text-4xl font-bold`}>{subTitle}</h2>
        )}
        <h1 className={`${color} lg:text-5xl text-2xl font-bold mb-3`}>
          {title}
        </h1>
        <p
          className={`${color} lg:text-xl  text-lg font-medium mt-2 lg:w-[700px] mx-auto`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default SectionTitle;
