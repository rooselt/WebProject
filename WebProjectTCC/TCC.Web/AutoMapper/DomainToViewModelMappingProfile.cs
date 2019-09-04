
namespace TCC.Web.AutoMapper
{
    using global::AutoMapper;
    using TCC.Domain.Entities;
    using TCC.Web.Models;

    public class DomainToViewModelMappingProfile : Profile
    {
        public override string ProfileName => "DomainToViewModelMapping";

        public DomainToViewModelMappingProfile()
        {
           
            this.CreateMap<EmpresaViewModel, Empresa>();
            this.CreateMap<ClienteViewModel,  Cliente>();
        }
    }
}