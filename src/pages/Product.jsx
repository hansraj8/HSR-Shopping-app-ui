
import { Add, Remove } from '@material-ui/icons';
import { styled } from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { Navbar } from '../components/Navbar';
import Newsletters from '../components/Newsletters';
import { mobile } from '../responsive';




const Container = styled.div``;

const ImgContainer = styled.div`
flex: 1;

`;

const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
${mobile({ padding: "10px" })}

`;

const Wrapper = styled.div`
padding: 50px;
display:flex;
${mobile({ padding: "10px", flexDirection:"column" })}

`;

const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({ height: "40vh" })}

`;

const Title = styled.div`
font-weight: 500;
font-size:150%;
`;

const Desc = styled.div`
    margin: 20px 0px;
`;

const Price = styled.div`
font-weight:50;
font-size: 40px;
`;


const FilterContainer = styled.div`
width: 50%;
margin:30px 0px;
display:flex;
justify-content: space-betweeen;
${mobile({ width: "100%" })}

`;

const Filter = styled.div`
margin:10px;
display:flex;
align-items: center;

`;

const FilterSizeOption = styled.option``;

const FilterSize = styled.select`
margin-left: 10px;
padding:5px;

`;

const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${(props) => props.color};
margin: 0px 5px;
cursor: pointer;
`;

const FilterTitle = styled.span`

font-size: 20px;
font-weight: 200;
`;

const AddContainer = styled.div`
width: 50%;
display: flex;
align-items:center;
justify-content:space-between;
${mobile({ width: "100%" })}

`;

const AmountContainer = styled.div`
    display:flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width:30px;
    height: 30px;
    border-radius: 10px;
    border:1px solid teal;
    display:flex;
    align-items:center;
    justify-content:center;
    margin: 0px 5px;
    
`;

const Button = styled.button`
    padding : 15px;
    border: 2px solid teal;
    background-color: white;
    cursor:pointer;
    font-weight: 500;

    &:hover{
        background-color:lightgray;
    }
`;


 
const Product = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <ImgContainer>
            <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
            </ImgContainer>
            <InfoContainer>
                <Title>Denim Suit</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sunt repudiandae commodi neque impedit repellat!</Desc>
                <Price>$ 10</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>color</FilterTitle>
                    <FilterColor color="black" />
                    <FilterColor color="darkblue"/>
                    <FilterColor color="gray"/>
                </Filter>

                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                        <FilterSizeOption>XXL</FilterSizeOption>
                    </FilterSize>
                </Filter>

            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <Remove />
                    <Amount>1</Amount>
                    <Add />
                </AmountContainer>
                <Button>ADD TO CART</Button>
            </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletters />
        <Footer />
    </Container>
  )
}

export default Product