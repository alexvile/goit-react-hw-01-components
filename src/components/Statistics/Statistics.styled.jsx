import styled from '@emotion/styled';

export const Container = styled.section`
  width: 270px;
  padding-top: 15px;
  margin-top: 20px;
  background-color: white;
`;
export const Title = styled.h2`
  margin-top: 0;
  color: #7f7f7f;
  text-align: center;
`;
export const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  margin: 0;
`;
export const Item = styled.li`
  flex: 0 1 25%;
  text-align: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: flex;
  flex-direction: column;
`;
export const ItemLabel = styled.p`
  font-weight: 500;
  color: white;
  font-size: 12px;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;
export const ItemValue = styled.p`
  font-weight: 500;
  color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;
