const SectionTitle = ({ title, subTitle, text, color }) => {
  return (
    <div className="flex items-center justify-center text-center">
      <div>
        {subTitle && (
          <h2 className={`${color} text-4xl font-bold`}>{subTitle}</h2>
        )}
        <h1 className="text-5xl font-bold text-gray-600 mb-3">{title}</h1>
        <p className="text-xl font-medium text-gray-600 mt-2 lg:w-[700px] mx-auto">
          {text}
        </p>
      </div>
    </div>
  );
};

export default SectionTitle;
