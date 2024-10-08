import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';

const Accordion = ({ item }) => {

    return (
        <>
            {
                item.id == 1 ? <MDBAccordion initialActive={1}>
                    <MDBAccordionItem collapseId={1} headerTitle={item.q}>
                        <strong>{item.ans}</strong>
                    </MDBAccordionItem>
                </MDBAccordion>
                    :
                    <MDBAccordion>
                        <MDBAccordionItem collapseId={1} headerTitle={item.q}>
                            <strong>{item.ans}</strong>
                        </MDBAccordionItem>
                    </MDBAccordion>
            }

        </>

    );
}
export default Accordion
