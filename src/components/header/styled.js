import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px;

  input {
    border: 1px solid #ccc;
    border-radius: 8px;
    border-color: purple;
    width: 100%;
    height: 44px;
    padding: 8px;
  }

  button {
    background-color: purple;
    padding: 8px 16px;
    margin: 0 8px;
    border-radius: 8px;

    &:hover {
      background-color: DarkViolet;
      box-shadow: 3px 2px 10px;
      box-shadow: 0 0 0.3em rgba(0, 0, 0, 0.3);
    }

    span {
      font-weight: bold;
      text-color: white;
      color: white;
    }
  }
`
