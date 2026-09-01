import React from 'react'
import Card from './Card'

function Gallery() {
    const movieData = [
      {
        pic : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJN3N0Ua5RN6Tl3E5JfbFhEoN8y0Z00_W-U6jQG8R2Uw&s',
        Rating : '9.3',
        Name : 'Hanuman Ansh'
      },
      {
        pic : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZ6lBDYZ7Cissswn_TLSv2-qhRn2onyYF9Au7TuJodQ&s',
        Rating : '9.0',
        Name : 'Bleach : Thousand Year Blood War'
      },
      {
        pic : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVrVZQQmlUZ7vNmWr3YDhVr8YXPtZtcN6KArwbYlsg9Q&s=10',
        Rating : '8.0',
        Name : 'Spider-Man : Brand New Day'
      },
      {
        pic : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSokt1X_SHssZM6POQeX1xGv9UoYElkrQEhZVkfZZThYA&s=10',
        Rating   : '8.1',
        Name : 'Rao Bahadur'
      },

    ];

    return (
        <div style={{ display: 'flex', border: '1px solid white', padding: '10px', margin: '5px' }}>
            {
                movieData.map((ele) => (
                    <div>
                        <Card data={ele} />
                    </div>
                ))}
        </div>
    )
}

export default Gallery

