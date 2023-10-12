interface NoResultsProps {
  search: string;
}

export const NoResults = ({ search }: NoResultsProps) => {
  return (
    <p>
      {`Sorry, no results for `}
      <em>{`"${search}"`}</em>
    </p>
  );
};
