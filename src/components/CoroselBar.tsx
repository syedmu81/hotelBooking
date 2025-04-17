const CoroselBar = () => {
  // Array of image indices for dynamic rendering
  const items = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <div className="w-full flex justify-center mt-5">
      <div className="slider py-4 ">
        <div className="list">
          {items.map((position) => (
            <div
              key={`original-${position}`}
              className="item"
              style={{ "--position": position } as React.CSSProperties}
            >
              <img src="/coverImage.jpg" alt={`Slide ${position}`} loading="lazy" />
            </div>
          ))}
          {/* Duplicate items for infinite loop */}
          {items.map((position) => (
            <div
              key={`duplicate-${position}`}
              className="item"
              style={{ "--position": position + items.length } as React.CSSProperties}
            >
              <img src="/coverImage.jpg" alt={`Slide ${position}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoroselBar;