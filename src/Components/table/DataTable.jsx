// CustomTable.js
import React from 'react';

const CustomTable = ({ headers, data, className }) => {
  return (
    <table className={`min-w-full ${className}`}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="py-3 px-4  text-[#B5B5B5] font-normal text-[14.59px]" style={{ 
                borderBottom:'1px solid #70788a'
             }}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="py-3 px-4 text-center "
              style={{ 
                borderBottom:'1px solid #70788a',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                backgroundImage: 'linear-gradient(93.67deg, #FFFFFF 0%, rgba(255, 255, 255, 0.25) 100%)'
             }}>
                {Array.isArray(cell) ? (
                  <div className="flex space-x-2 justify-center items-center">
                    {cell.map((developer, devIndex) => (
                        console.log(developer,'developer'),
                      <img
                        key={devIndex}
                        src={developer.image}
                        alt={developer.name}
                        className={`${developer.status == 'active' ? 'w-[69.92px] h-[23.68px]' : developer.link ? 'w-[14.59px] h-[14.59px]' : 'w-8 h-8' } rounded-full inline-block"`}
                      />
                    ))}
                  </div>
                ) : (
                  typeof cell === 'object' ? (
                    <div className="flex items-center justify-center space-x-2 gap-2">
                      <img src={cell.image} alt={cell.name} className="w-8 h-8 rounded-full inline-block" />
                      {cell.name}
                    </div>
                  ) : (
                    cell
                  )
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomTable;
