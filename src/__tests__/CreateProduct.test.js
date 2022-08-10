import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import CreateProduct from "../components/create-product/CreateProduct";

const mockedUsedNavigate = jest.fn();

// Mock useNavigate
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
   useNavigate: () => mockedUsedNavigate,
 }));

 beforeEach(() => {
    mockedUsedNavigate.mockReset();
  });

  describe("Test the create Products Page", ()=>{

    test("Create Product text is displayed on the screeen", ()=>{
        render(<CreateProduct/>);
        const linkElement = screen.getByText(/Create Product/i);
        expect(linkElement).toBeInTheDocument();
    })

    test('Create Product should have two buttons', async () => {
      render(<CreateProduct/>);
      const buttonList = await screen.findAllByRole("button");
      expect(buttonList).toHaveLength(3);
  }); 



  })