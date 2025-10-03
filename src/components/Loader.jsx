import React from "react";
import { Spin, Typography } from "antd";

const { Text } = Typography;

export default function FullScreenLoader({ message = "Loading..." }) {
  return (
    <>
      <style>{`
        @keyframes smoothFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fullscreen-loader {
          min-height: 100vh; /* full screen */
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.9);
          animation: smoothFadeIn 250ms ease-in;
        }
        .loader-msg {
          margin-top: 10px;
          font-size: 16px;
          color: rgba(0,0,0,0.7);
        }
      `}</style>

      <div className="fullscreen-loader">
        <Spin size="large" />
        <Text className="loader-msg">{message}</Text>
      </div>
    </>
  );
}
