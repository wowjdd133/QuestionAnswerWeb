import React, {useState} from 'react';
import from './QuestionItem.scss';

const QuestionItem = (question) => {

  const {
    title, tag, answers, view
  } = question.question;

  const tagArray = tag.split(',');

  console.log(tagArray);

  const tagList = tagArray.map((tag, i) => {
    return (<div key={i} className="tags"><span>{tag}</span></div>)
  })

  return (
    <div className="questionContent">
      <div className="Additional">
        <div className="addit">
          <div>
            <span>{answers}</span>
          </div>
          <span>answer</span>
        </div>
        <div className="addit">
          <div>
            <span>{view}</span>
          </div>
          <span>view</span>
        </div>
      </div>

      <div className="content">
        <a>title:</a><h2>{title}</h2>
        {tagList}
      </div>

      <style jsx>
        {` 
        .addit div {
          text-align: center;
        }

        .Additional .addit {
          display: absolute;
          top: 0; left: 0; bottom: 0; right: 0;
          margin: 10% auto;
          height: 38px;
          min-width: 38px;
          font-size: 11px;
          border: 1px solid #000000;
          width: auto;
          text-align: center;
        }

        .questionContent {
          width: 100%;
          padding: 12px 8px;
          box-sizing: border-box;

          display: flex;
          float: none;
          overflow: hidden;
          border-bottom: 1px solid #eff0f1;
        }

        .questionContent .content {
          display: flex;
          flex: 1 auto;
          width: auto;
          float: none;
          margin: 0;
          overflow: hidden;
          vertical-align:: baseline;
        }

        .questionContent .Additional {
          float: none;
          display: flex;
          flex-wrap: nowrap;
          align-items: flex-start;
          margin-right: 0px;
          padding: 0 8px 0 0;
          flex-shrink: 0;
          vertical-align: top;
          cursor: pointer;
        }
      `}
      </style>
    </div>
  );
};

export default QuestionItem;