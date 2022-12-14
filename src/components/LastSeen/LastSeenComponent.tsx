import LastSeenPropsInterface from "./LastSeenInterface";

const LastSeenComponent = ({ lastSeen }: LastSeenPropsInterface) => {
  const lastSeenSeconds: number = Math.floor((Date.now() - lastSeen) / 1000);
  const lastSeenMinutes: number = Math.floor(lastSeenSeconds / 60);

  const lessThanMinute = (lastSeen: number): boolean => {
    return lastSeen < 60 ? true : false;
  };

  return (
    <div>
      <span>
        {lessThanMinute(lastSeenSeconds)
          ? `${lastSeenSeconds} seconds ago`
          : `${lastSeenMinutes} ${
              lastSeenMinutes === 1 ? "minute" : "minutes"
            } ago`}
      </span>
    </div>
  );
};

export default LastSeenComponent;
