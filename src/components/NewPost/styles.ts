import styled from 'styled-components'

export const NewPostBtt = styled.button`
  background: transparent;
  color: var(--green-500);
  border: 1px solid var(--green-500);
  border-radius: 8px;
  height: 50px;
  padding: 0 1.5rem;
  font-weight: bold;
  display: block;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  transition: color 0.1s, background-color 0.1s;

  margin-right: 32px;
`

export const ContentPost = styled.textarea`
  width: 100%;
  background: var(--gray-900);
  resize: none;
  height: 6rem;
  padding: 1rem;
  border-radius: 8px;
  color: var(--gray-100);
  line-height: 1.4;
  margin-top: 1rem;
  
  border-color: black;
  border-width: 1px;
  border: solid;
`

export const PublishBtt = styled.button`
  padding: 1rem 1.5rem;
  margin-top: 1rem;
  border-radius: 8px;
  border: 0;
  background: var(--green-500);
  color: var(--white);
  font-weight: bold;
  cursor: pointer;

  transition: background-color 0.1s;
`

export const PostsWrapper = styled.div`
  padding-bottom: 1rem;
`