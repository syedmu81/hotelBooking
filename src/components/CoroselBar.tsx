
const CoroselBar = () => {
  return (
    <div className="w-full flex justify-center mt-5">
    <div className="slider">
      <div className=" flex list">
        <div className="item" style={{ "--position": 1 } as React.CSSProperties}><img src="/coverImage.jpg"/></div>
        <div className="item" style={{ "--position": 2 } as React.CSSProperties}><img src="/coverImage.jpg"/></div>
        <div className="item" style={{ "--position": 3 } as React.CSSProperties}><img src="/coverImage.jpg"/></div>
        <div className="item" style={{ "--position": 4 } as React.CSSProperties}><img src="/coverImage.jpg"/></div>
        <div className="item" style={{ "--position": 5 } as React.CSSProperties}><img src="/coverImage.jpg"/></div>
        <div className="item" style={{ "--position": "6" } as React.CSSProperties}><img src="/coverImage.jpg"/></div>
        <div className="item" style={{ "--position": "7" } as React.CSSProperties}><img src="/coverImage.jpg"/></div>
        <div className="item" style={{ "--position": "8" } as React.CSSProperties}><img src="/coverImage.jpg"/></div>
        <div className="item" style={{ "--position": "9" } as React.CSSProperties}><img src="/coverImage.jpg"/></div>
        <div className="item" style={{ "--position": "10" } as React.CSSProperties}><img src="/coverImage.jpg"/></div>

      </div>
    </div>
    </div>
  )
}

export default CoroselBar