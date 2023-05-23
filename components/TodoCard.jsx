import React from "react";

const Detail = ({ id, name, deadline, directions }) => {
  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my-modal" className="btn">
        查看详情
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">代办详情</h3>
          <p className="font-black py-4">{name}</p>
          <p className="py-2">说明:{directions}</p>
          <p className="py-2">截至日期:{deadline}</p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              好!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

const TodoCard = ({ id, name, deadline, directions }) => {
  return (
    <div>
      <div className="alert shadow-lg">
        <div className="flex justify-between w-full">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked
              className="checkbox checkbox-primary mx-2"
            />
            <span>{name}</span>
          </div>

          <Detail
            id={id}
            name={name}
            deadline={deadline}
            directions={directions}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
